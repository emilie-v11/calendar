// import ActionButton from './ActionButton';
import { Event } from '../utilities/interfaces';

interface EventItemProps {
  event: Event;
  // removeEvent: (id: string) => void;
  handleEditEvent: (event: Event) => void;
}

const EventItem: React.FC<EventItemProps> = ({
  event,
  // removeEvent,
  handleEditEvent,
}) => {
  return (
    // <>
    <div
      className="flex w-full h-full bg-powder-blue p-2.5 rounded-md cursor-pointer"
      onClick={() => handleEditEvent(event)}
    >
      <p className="m-auto">{event?.content}</p>
    </div>
    // {/* <ActionButton
    //   event={Event}
    //   removeEvent={removeEvent}
    //   handleEditEvent={handleEditEvent}
    // /> */}
    // </>
  );
};

export default EventItem;
