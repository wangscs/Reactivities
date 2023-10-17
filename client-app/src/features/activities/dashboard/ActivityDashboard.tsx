import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities : Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: String) => void;
    cancelSelectActivity: () => void;
}

export default function ActivityDashboard({activities, selectedActivity, 
        selectActivity, cancelSelectActivity}: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity &&
                <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
                <ActivityForm />
            </GridColumn>
        </Grid>
    )
}