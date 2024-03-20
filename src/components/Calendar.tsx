import React, { useState } from 'react';
import { formatDate, getWeekDays } from '../utilities/data';
import EventSection from './EventSection';
import { Day, Event } from '../utilities/interfaces';
import Modal from './Modal';
import Form from './Form';

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const days = getWeekDays() as Day[];
  const [currentEventDetails, setCurrentEventDetails] = useState<Event>({
    day: '',
    time: '',
    content: '',
    id: '',
  });

  const generateUniqueId = (): string => {
    return `${new Date().getTime()}-${Math.random().toString(36).slice(2, 11)}`;
  };

  function handleOpenModal(day: string, time: string, content: string) {
    setCurrentEventDetails({ day, time, content: '', id: undefined });
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const addEvent = (content: string) => {
    const newEvent = {
      ...currentEventDetails,
      content,
      id: generateUniqueId(),
    };
    setEvents([...events, newEvent]);
    // setIsModalOpen(false);
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
    setIsModalOpen(false);
  };

  const handleEditEvent = (eventToEdit: Event) => {
    setCurrentEventDetails(eventToEdit);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      eventContent: { value: string };
    };
    const content = target.eventContent.value;

    if (currentEventDetails.id) {
      setEvents(
        events.map(event =>
          event.id === currentEventDetails.id ? { ...event, content } : event,
        ),
      );
    } else {
      addEvent(content);
    }

    setIsModalOpen(false);

    setCurrentEventDetails({ day: '', time: '', content: '', id: undefined });
  };

  return (
    <>
      <div className="flex flex-nowrap w-full max-w-screen-2xl mx-auto max-h-[90vh] min-h-[850px] overflow-y-scroll rounded-lg">
        <div className="flex flex-col flex-[0_0_auto] text-center border-r border-b border-light-grey">
          <div className="sticky top-0 z-10 bg-peach-puff border-b-2 border-light-grey h-auto p-4 h-16">
            <h2 className="text-center text-transparent text-lg">time</h2>
          </div>
          <div className="flex-1 flex items-center justify-center bg-neutral-100 border-b border-light-grey px-1">
            <span>Matin</span>
          </div>
          <div className="flex-1 flex items-center justify-center bg-neutral-100 border-b border-light-grey px-1">
            <span>Après-midi</span>
          </div>
        </div>
        <div className="flex flex-1 overflow-y-scroll">
          {days.map(day => (
            <section
              key={day.name}
              className="flex-1 flex flex-col bg-white border-r border-b border-light-grey overflow-y-scroll w-full min-w-[200px] max-w-[300px] min-h-auto"
            >
              <div className="sticky top-0 z-10 bg-peach-puff border-b-2 border-light-grey h-auto p-4">
                <h2 className="text-lg text-center">
                  {day.name} {day.date} {day.month}
                </h2>
              </div>
              <div className="h-full text-center flex flex-col justify-center items-center border-light-grey">
                <EventSection
                  events={events}
                  dayFullDate={day.fullDate}
                  sectionTime="morning"
                  handleOpenModal={handleOpenModal}
                  handleEditEvent={handleEditEvent}
                />
                <EventSection
                  events={events}
                  dayFullDate={day.fullDate}
                  sectionTime="afternoon"
                  handleOpenModal={handleOpenModal}
                  handleEditEvent={handleEditEvent}
                />
              </div>
            </section>
          ))}
          {isModalOpen && (
            <Modal
              modalTitle={
                <>
                  <span className="text-base">Ajouter un événement pour :</span>
                  <span className="text-lg font-bold">
                    {' '}
                    {formatDate(currentEventDetails?.day ?? '')}
                    {currentEventDetails?.time === 'morning'
                      ? ' matin'
                      : ' après-midi'}
                  </span>
                </>
              }
              handleCloseModal={handleCloseModal}
            >
              <Form
                handleSubmit={handleSubmit}
                currentEventDetails={currentEventDetails}
                removeEvent={removeEvent}
                handleCloseModal={handleCloseModal}
                setCurrentEventDetails={setCurrentEventDetails}
              />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default Calendar;
