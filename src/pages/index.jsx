import { getAppointments } from "@/api/appointments";
import Appointments from "@/features/appointments";

export default function Homepage({ appointments }) {
  return (
    <div className="mt-16 w-1/2 mx-auto">
      <Appointments appointments={appointments} />
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      appointments: getAppointments(),
    },
  };
}
