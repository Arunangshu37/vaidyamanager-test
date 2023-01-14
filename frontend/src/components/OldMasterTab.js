import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OldPatientTab from './OldPatientTab';


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
        <Tab eventKey="old-Therapy" title="Therapy">

        </Tab>
        <Tab eventKey="old-inquiry" title="Inquiry">

        </Tab>
        <Tab eventKey="patient-visit" title="Patient Visits">

        </Tab>
      </Tabs>
    </div>
  )
}

export default OldMasterTab