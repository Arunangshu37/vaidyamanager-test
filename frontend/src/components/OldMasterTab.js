import React, { useState,useEffect,useLocation } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OldPatientTab from './OldPatientTab';
import ViewDetailTab from './ViewDetailTab';
import VisitingCalender from './VisitingCalender';
import BillHistoryTab from './BillHistoryTab';
import OldPrescriptions from './OldPrescriptions';
import { withRouter } from 'react-router-dom';

const OldMasterTab = () => {
  const [key, setKey] = useState('oldPatient')
  const [selectedPatientId, setSelectedPatientId] = useState();
  // const [activeTab, setActiveTab] = useState("oldPatient");
  const choosePatient = (oldPatient) => {
    setSelectedPatientId(oldPatient);
    setKey("oldprescription");
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="oldPatient" title="Patient">
        <OldPatientTab choosePatient={choosePatient}/>
          {/* <OldPatientTab  handleViewClick={handleViewClick}/> */}
        </Tab>
        <Tab eventKey="oldprescription" title="Prescription">
          <OldPrescriptions patientIds={selectedPatientId} />
        </Tab>
        <Tab eventKey="oldTherapy" title="Therapy">

        </Tab>
        <Tab eventKey="oldinquiry" title="Inquiry">

        </Tab>
        <Tab eventKey="patientvisit" title="Visiting Calender">
          <VisitingCalender patientId={selectedPatientId}/>
        </Tab>
        <Tab eventKey="Bill" title="Bill history">
          <BillHistoryTab PatientId = {selectedPatientId}/>
        </Tab>
        <Tab eventKey="view" title="View">
          <ViewDetailTab />
        </Tab>
      </Tabs>
    </div>
  )
}

export default OldMasterTab