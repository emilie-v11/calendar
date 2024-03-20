import { Event } from '../utilities/interfaces';

interface EventItemProps {
  event: Event;
  handleEditEvent: (event: Event) => void;
}

const EventItem: React.FC<EventItemProps> = ({
  event,
  handleEditEvent,
}) => {
  return (
    // <>
    <div
      className="flex w-full h-full bg-powderBlue p-2.5 rounded-md cursor-pointer"
      onClick={() => handleEditEvent(event)}
    >
      <p className="m-auto">{event?.content}</p>
    </div>
  );
};

export default EventItem;
