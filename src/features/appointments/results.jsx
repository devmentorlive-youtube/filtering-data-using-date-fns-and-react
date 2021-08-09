import { format } from "date-fns";

export default function Results({ appointments }) {
  return (
    <div className="flex flex-wrap">
      {appointments.map((appointment) => (
        <div className="border p-4 w-1/2">
          <div className="font-bold text-gray-800">{appointment.name}</div>
          <div className="text-blue-400">{appointment.email}</div>
          <div className="font-light">
            {format(new Date(appointment.startsAt), "MM/dd/yyyy '@' hh/mmaaa")}
          </div>
        </div>
      ))}
    </div>
  );
}
