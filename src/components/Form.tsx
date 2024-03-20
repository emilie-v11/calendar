import React from 'react';
import { Event } from '../utilities/interfaces';
import Button from './Button';

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  currentEventDetails: Event;
  setCurrentEventDetails: React.Dispatch<React.SetStateAction<Event>>;
  removeEvent: (id: string) => void;
  handleCloseModal: () => void;
}

const Form: React.FC<FormProps> = ({
  handleSubmit,
  currentEventDetails,
  removeEvent,
  setCurrentEventDetails,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full p-2 rounded-md border border-light-grey mb-5"
        name="eventContent"
        placeholder="Contenu de l'événement"
        value={currentEventDetails.content}
        onChange={e =>
          setCurrentEventDetails({
            ...currentEventDetails,
            content: e.target.value,
          })
        }
        required
      />
      <div className="flex justify-end space-x-2.5">
        <Button
          text="Supprimer"
          type="button"
          addClassName="rounded-md bg-light-grey text-black p-2.5"
          onClick={() => removeEvent(currentEventDetails.id ?? '')}
          disabled={!currentEventDetails.id}
        />
        <Button
          text="Valider"
          type="submit"
          addClassName="rounded-md bg-powder-blue text-black p-2.5"
        />
      </div>
    </form>
  );
};

export default Form;
