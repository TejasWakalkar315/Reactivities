import React, { FormEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import {v4 as uuid} from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  submitting:boolean;
}
export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: InitialFormState,
  createActivity,
  editActivity,
  submitting
}) => {
    
  const initializeForm = () => {
    if (InitialFormState) {
      return InitialFormState;
    } else {
      return {
        id: "",
        title: "",
        date: "",
        city: "",
        venue: "",
        description: "",
        category: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleInputChange = (event:FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      const {name,value} =event.currentTarget;
      setActivity({...activity,[name]:value})
  }

  const handleSubmit=()=>{
        if(activity.id.length===0){
            let newActivity ={
                ...activity,
                id:uuid(),
            }
            createActivity(newActivity);
        }
        else{
            editActivity(activity);
        }
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input onChange={handleInputChange}  name='title' placeholder="Title" value={activity.title} />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          onChange={handleInputChange}  name='description'
          value={activity.description}
        />
        <Form.Input onChange={handleInputChange}  name='category' placeholder="Category" value={activity.category} />
        <Form.Input onChange={handleInputChange}  name='date' type="datetime-local" placeholder="Date" value={activity.date} />
        <Form.Input onChange={handleInputChange}  name='city' placeholder="City" value={activity.city} />
        <Form.Input onChange={handleInputChange}  name='venue' placeholder="Venue" value={activity.venue} />
        <Button loading={submitting} floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          onClick={() => {
            setEditMode(false);
          }}
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
