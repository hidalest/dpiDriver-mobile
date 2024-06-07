import React from 'react';
import DashboardHeading from '../../../components/Dashboard/DashboardHeading/DashboardHeading';
import { Text, View } from 'react-native';
import { Card } from '@ui-kitten/components';

function Dashboard(props) {
  return (
    <View>
      <DashboardHeading {...dashboardProps.dashboardHeading} />
      <Card>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          explicabo placeat aspernatur tenetur id rerum similique ratione
          reiciendis adipisci omnis eaque nulla aut autem beatae at accusamus
          aliquam, assumenda laborum.
        </Text>
      </Card>
    </View>
  );
}

export default Dashboard;
