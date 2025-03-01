// src/app/dashboard/profile/page.tsx
export default function ProfilePage() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Role:</strong> Admin</p>
        </div>
      </div>
    );
  }
  