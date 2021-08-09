import { useRouter } from "next/router";
import {
  isSameDay,
  isWithinInterval,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  subMonths,
  subYears,
} from "date-fns";
import Filters from "./filters";
import Results from "./results";
import Info from "./info";

function filterByToday(appointments) {
  return appointments.filter((appointment) =>
    isSameDay(new Date(appointment.startsAt), new Date())
  );
}

function filterByThisWeek(appointments) {
  return appointments.filter((appointment) =>
    isWithinInterval(new Date(appointment.startsAt), {
      start: startOfWeek(new Date()),
      end: endOfWeek(new Date()),
    })
  );
}

function filterByThisMonth(appointments) {
  return appointments.filter((appointment) =>
    isWithinInterval(new Date(appointment.startsAt), {
      start: startOfMonth(new Date()),
      end: endOfMonth(new Date()),
    })
  );
}

function filterByThisYear(appointments) {
  return appointments.filter((appointment) =>
    isWithinInterval(new Date(appointment.startsAt), {
      start: startOfYear(new Date()),
      end: endOfYear(new Date()),
    })
  );
}

function filterByLastMonth(appointments) {
  return appointments.filter((appointment) =>
    isWithinInterval(new Date(appointment.startsAt), {
      start: startOfMonth(subMonths(new Date(), 1)),
      end: endOfMonth(subMonths(new Date(), 1)),
    })
  );
}

function filterByLastYear(appointments) {
  return appointments.filter((appointment) =>
    isWithinInterval(new Date(appointment.startsAt), {
      start: startOfYear(subYears(new Date(), 1)),
      end: endOfYear(subYears(new Date(), 1)),
    })
  );
}

function filter(appointments, when) {
  switch (when) {
    case "today":
      return filterByToday(appointments);
    case "this-week":
      return filterByThisWeek(appointments);
    case "this-month":
      return filterByThisMonth(appointments);
    case "this-year":
      return filterByThisYear(appointments);
    case "last-month":
      return filterByLastMonth(appointments);
    case "last-year":
      return filterByLastYear(appointments);
    default:
      return appointments;
  }
}

export default function Appointments({ appointments }) {
  const { query } = useRouter();
  const filtered = filter(appointments, query.when);

  return (
    <>
      <Filters />

      <Info filtered={filtered.length} appointments={appointments.length} />

      <Results appointments={filtered} />
    </>
  );
}
