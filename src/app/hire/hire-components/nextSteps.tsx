// app/hire/hire-components/nextSteps.tsx
'use client';

import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import styles from '@/styles/pages/hire-components/nextSteps.module.scss';

// DatePickerWithPresets component adapted from shadcn example
function DatePickerWithPresets({ value, onChange }: { value: Date | null; onChange: (date: Date | null) => void }) {
  const [date, setDate] = useState<Date | null>(value);

  const handleSelect = (newDate: Date | undefined) => {
    if (!newDate) {
      setDate(null);
      onChange(null);
      return;
    }
    const selectedDate = new Date(newDate);
    // Prevent past dates
    if (selectedDate < new Date(new Date().setHours(0, 0, 0, 0))) {
      selectedDate.setTime(new Date().setHours(0, 0, 0, 0));
    }
    setDate(selectedDate);
    onChange(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        <Select
          onValueChange={(value) => {
            const newDate = addDays(new Date(), parseInt(value));
            setDate(newDate);
            onChange(newDate);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={handleSelect}
            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
            initialFocus
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

const NextSteps: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isScheduled, setIsScheduled] = useState(false);

  const handleSchedule = async () => {
    if (selectedDate) {
      const response = await fetch('http://localhost:5000/api/schedule-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: selectedDate.toISOString() }),
      });

      if (response.ok) {
        setIsScheduled(true);
      } else {
        console.error('Scheduling failed');
      }
    }
  };

  return (
    <section id="next-steps" className={styles.nextSteps}>
      <h2 className={styles.sectionTitle}>Next Steps</h2>
      <div className={styles.options}>
        <div className={styles.option}>
          <h3 className={styles.optionTitle}>Schedule a Consultation</h3>
          {!isScheduled ? (
            <div className="space-y-4">
              <DatePickerWithPresets value={selectedDate} onChange={setSelectedDate} />
              <Button
                onClick={handleSchedule}
                disabled={!selectedDate}
                className={styles.scheduleButton}
              >
                Confirm Schedule
              </Button>
            </div>
          ) : (
            <p className={styles.confirmationText}>
              Consultation scheduled for {selectedDate?.toLocaleString()}! Check your email for details.
            </p>
          )}
        </div>
        <div className={styles.option}>
          <h3 className={styles.optionTitle}>Request a Quote</h3>
          <p className={styles.optionText}>
            Need a custom plan? We’ll review your submission and reply within 24 hours.
          </p>
          <p className={styles.confirmationText}>Check your email for confirmation!</p>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;