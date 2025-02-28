export default function DashboardSection({ params }: { params: { id: string } }) {
    return (
      <div>
        <h1>Dashboard Section: {params.id}</h1>
        <p>Content for {params.id} section</p>
      </div>
    );
  }
  