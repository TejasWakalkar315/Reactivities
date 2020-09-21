import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  setEditMode:(editMode:boolean)=>void;
  deleteActivity:(id:string)=>void;
}

export const ActivityList: React.FC<IProps> = ({
  activities,
  selectActivity,
  setEditMode,
  deleteActivity
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city},{activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button onClick={()=>{selectActivity(activity.id); setEditMode(false)}} color="blue" content="View" floated="right" />
                <Button onClick={()=>{deleteActivity(activity.id)}} color="red" content="Delete" floated="right" />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};