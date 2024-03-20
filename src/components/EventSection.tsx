import { Event } from '../utilities/interfaces';
import Button from './Button';
import EventItem from './EventItem';

interface EventSectionProps {
  events: Event[];
  dayFullDate: string;
  sectionTime: 'morning' | 'afternoon';
  handleOpenModal: (day: string, time: string, content: string) => void;
  handleEditEvent: (event: Event) => void;
}

const EventSection: React.FC<EventSectionProps> = ({
  events,
  dayFullDate,
  sectionTime,
  handleOpenModal,
  handleEditEvent,
}) => {
  const sectionEvents = events.filter(
    event => event.day === dayFullDate && event.time === sectionTime,
  );

  return (
    <div className="w-full h-1/2 flex justify-center items-center p-2 border-b border-lightGrey">
      {sectionEvents.length > 0 ? (
        sectionEvents.map((event, index) => (
          <EventItem
            key={index}
            event={event}
            handleEditEvent={handleEditEvent}
          />
        ))
      ) : (
        <Button
          text="+"
          type="button"
          addClassName="bg-neutral-100 text-xl w-12 h-12 border-none rounded-full hover:shadow-md hover:bg-neutral-200 hover:scale-110"
          onClick={() => handleOpenModal(dayFullDate, sectionTime, '')}
        />
      )}
    </div>
  );
};

export default EventSection;
