import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities : Activity[];
}

export default function ActivityDashboard(props: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
            <List>
                {props.activities.map((activity) => (
                    <List.Item key={activity.id}>
                        {activity.title}
                    </List.Item>
                ))}
            </List>
            </GridColumn>
        </Grid>
    )
}