//necesita ?id=${id} para su nav
const ROUTE_HOME = '/';

const LOGIN = '/login';
const PATIENTID = ':patientId';
const PATIENTS = '/patients';
const PATIENTS_NEW = '/patient-new';
const PATIENTS_UP = '/patient-update';
const PATIENTS_UPDATE = `${PATIENTS_UP}/${PATIENTID}`;

const PROFESSIONALID = ':professionalId';
const PROFESSIONALS = '/professionals';
const PROFESSIONAL_UP = '/professional-update';
const PROFESSIONAL_NEW = '/professional-new';
const PROFESSIONAL_UPDATE = `${PROFESSIONAL_UP}/${PROFESSIONALID}`;

const INSTITUTIONID = ':institutionId';
const INSTITUTIONS = '/institutions';
const INSTITUTION_NEW = '/institution-new';
const INSTITUTION_UP = '/institution-update';
const INSTITUTION_UPDATE = `/institution-update/${INSTITUTIONID}`;

const CONSULTATIONID = ':consultationId';
const CONSULTATIONS = '/consultations';
const CONSULTATION_NEW = '/consultation-new';
const CONSULTATION_UP = '/consultation-update';
const CONSULTATION_UPDATE = `/consultation-update/${CONSULTATIONID}`;

const CALENDARID = ':calendarId';
const CALENDARS = '/calendars';
const CALENDAR_NEW = '/calendar-new';
const CALENDAR_UP = '/calendar-update';
const CALENDAR_UPDATE = `/calendar-update/${CALENDARID}`;

const MYIPERSONALDATAID = ':mypersonaldataId';
const MYIPERSONALDATA = '/mypersonaldata';
const MYIPERSONALDATA_NEW = '/mypersonaldata-new';
const MYIPERSONALDATA_UP = '/mypersonaldata-update';
const MYIPERSONALDATA_UPDATE = `${MYIPERSONALDATA_UP}/${MYIPERSONALDATAID}`;

export {
    LOGIN,
    ROUTE_HOME,
    PATIENTS,
    PATIENTS_NEW,
    PATIENTS_UPDATE,
    PROFESSIONALS,
    PROFESSIONAL_NEW,
    PROFESSIONAL_UPDATE,
    INSTITUTIONS,
    INSTITUTION_NEW,
    INSTITUTION_UPDATE,
    CONSULTATIONS,
    CONSULTATION_NEW,
    CONSULTATION_UPDATE,
    CALENDARS,
    CALENDAR_NEW,
    CALENDAR_UPDATE,
    CALENDAR_UP,
    CONSULTATION_UP,
    INSTITUTION_UP,
    PROFESSIONAL_UP,
    PATIENTS_UP,
    MYIPERSONALDATA,
    MYIPERSONALDATA_NEW,
    MYIPERSONALDATA_UPDATE
  };
