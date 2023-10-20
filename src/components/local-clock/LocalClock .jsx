/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/ClockActions";

const LocalClock = ({ clock, updateClock }) => {
  const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      <ClockActions clock={clock} updateClock={updateClock} local={true} />
    </div>
  );
};

export default LocalClock;
