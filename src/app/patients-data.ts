import { nanoid } from "nanoid";

// Define diagnosis types as a union of string literals
type Diagnosis =
  | "Hypertension"
  | "Diabetes"
  | "Asthma"
  | "Heart Disease"
  | "Arthritis"
  | "Allergies";

// Define the Patient type
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  diagnosis: Diagnosis;
  gender: "Male" | "Female";
  appointmentDate: string;
  lastVisit: string;
}

export const patients: Patient[] = [
  {
    id: nanoid(),
    firstName: "John",
    lastName: "Doe",
    diagnosis: "Hypertension",
    gender: "Male",
    appointmentDate: "2024-11-20",
    lastVisit: "2024-01-10",
  },
  {
    id: nanoid(),
    firstName: "Jane",
    lastName: "Smith",
    diagnosis: "Diabetes",
    gender: "Female",
    appointmentDate: "2025-02-15",
    lastVisit: "2025-01-20",
  },
  {
    id: nanoid(),
    firstName: "Michael",
    lastName: "Johnson",
    diagnosis: "Asthma",
    gender: "Male",
    appointmentDate: "2025-03-10",
    lastVisit: "2025-02-10",
  },
  {
    id: nanoid(),
    firstName: "Emily",
    lastName: "Davis",
    diagnosis: "Allergies",
    gender: "Female",
    appointmentDate: "2025-01-05",
    lastVisit: "2024-12-01",
  },
  {
    id: nanoid(),
    firstName: "David",
    lastName: "Wilson",
    diagnosis: "Heart Disease",
    gender: "Male",
    appointmentDate: "2025-04-22",
    lastVisit: "2025-03-25",
  },
  {
    id: nanoid(),
    firstName: "Sophia",
    lastName: "Brown",
    diagnosis: "Arthritis",
    gender: "Female",
    appointmentDate: "2025-04-10",
    lastVisit: "2025-02-14",
  },
  {
    id: nanoid(),
    firstName: "William",
    lastName: "Miller",
    diagnosis: "Hypertension",
    gender: "Male",
    appointmentDate: "2025-01-30",
    lastVisit: "2024-11-11",
  },
  {
    id: nanoid(),
    firstName: "Olivia",
    lastName: "Taylor",
    diagnosis: "Asthma",
    gender: "Female",
    appointmentDate: "2024-12-12",
    lastVisit: "2024-10-10",
  },
  {
    id: nanoid(),
    firstName: "James",
    lastName: "Anderson",
    diagnosis: "Diabetes",
    gender: "Male",
    appointmentDate: "2025-05-05",
    lastVisit: "2025-04-01",
  },
  {
    id: nanoid(),
    firstName: "Emma",
    lastName: "Thomas",
    diagnosis: "Allergies",
    gender: "Female",
    appointmentDate: "2025-03-17",
    lastVisit: "2025-02-18",
  },
];
