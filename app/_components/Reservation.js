// Auth
import { auth } from "../_lib/auth";
// Data fetching
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
// Components
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "./LoginMessage";

async function Reservation({ cabin }) {
  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-[1fr_.7fr] border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookedDates} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
