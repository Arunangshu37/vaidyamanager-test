import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OldPatientTab from './OldPatientTab';
import ViewDetailTab from './ViewDetailTab';
import VisitingCalender from './VisitingCalender';
import BillHistoryTab from './BillHistoryTab';
import OldPrescriptions from './OldPrescriptions';


const OldMasterTab = () => {
  const [key, setKey] = useState('old-Patient');
  return (
    <div style={{ marginTop: "4rem" }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="old-Patient" title="Patient">
          <OldPatientTab />
        </Tab>
        <Tab eventKey="old-prescription" title="Prescription">
          <OldPrescriptions />
        </Tab>
        <Tab eventKey="old-Therapy" title="Therapy">

        </Tab>
        <Tab eventKey="old-inquiry" title="Inquiry">

        </Tab>
        <Tab eventKey="patient-visit" title="Visiting Calender">
          <VisitingCalender />
        </Tab>
        <Tab eventKey="Bill" title="Bill history">
          <BillHistoryTab />
        </Tab>
        <Tab eventKey="view" title="View">
          <ViewDetailTab />
        </Tab>
      </Tabs>
    </div>
  )
}

export default OldMasterTab