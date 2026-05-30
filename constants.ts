import { BodyPart } from './types';

// Comprehensive list of symptoms for the search bar
export const ALL_SYMPTOMS = [
  "Abdominal pain", "Acne", "Agitation", "Anxiety", "Back pain", "Bald spots", 
  "Belching", "Black stools", "Blackouts", "Bleeding gums", "Blindness", 
  "Bloating", "Blood in stool", "Blood in urine", "Blurred vision", 
  "Body aches", "Bone pain", "Breathing difficulty", "Bruising", 
  "Burning sensation", "Chest pain", "Chills", "Clammy skin", "Cold hands", 
  "Cold sweats", "Confusion", "Constipation", "Cough", "Cramps", 
  "Dark urine", "Dehydration", "Depression", "Diarrhea", "Difficulty swallowing", 
  "Dizziness", "Double vision", "Drooling", "Drowsiness", "Dry eyes", 
  "Dry mouth", "Dry skin", "Ear discharge", "Ear pain", "Ear ringing", 
  "Excessive hunger", "Excessive thirst", "Eye discharge", "Eye pain", 
  "Eye redness", "Fainting", "Fatigue", "Fever", "Flank pain", 
  "Flatulence", "Frequent urination", "Gas", "Gum pain", "Hair loss", 
  "Hallucinations", "Hand tremors", "Headache", "Hearing loss", 
  "Heart palpitations", "Heartburn", "Heavy periods", "Hiccups", 
  "High fever", "Hoarseness", "Hot flashes", "Indigestion", "Insomnia", 
  "Irregular heartbeat", "Irritability", "Itching", "Jaw pain", "Joint pain", 
  "Joint swelling", "Knee pain", "Leg cramps", "Leg pain", "Lethargy", 
  "Light sensitivity", "Lightheadedness", "Loss of appetite", "Loss of balance", 
  "Loss of smell", "Loss of taste", "Low back pain", "Memory loss", 
  "Mood swings", "Mouth ulcers", "Muscle cramps", "Muscle pain", 
  "Muscle spasms", "Muscle weakness", "Nasal congestion", "Nausea", 
  "Neck pain", "Neck stiffness", "Night sweats", "Nipple discharge", 
  "Nosebleed", "Numbness", "Pale skin", "Palpitations", "Panic attacks", 
  "Paralysis", "Pelvic pain", "Poor coordination", "Rapid breathing", 
  "Rapid heart rate", "Rash", "Rectal bleeding", "Restlessness", 
  "Runny nose", "Seizures", "Severe pain", "Shaking", "Shortness of breath", 
  "Shoulder pain", "Skin lesions", "Skin peeling", "Skin redness", 
  "Sleep apnea", "Sleepiness", "Slurred speech", "Sneezing", "Sore throat", 
  "Speech difficulty", "Stiff neck", "Stomach pain", "Stomach swelling", 
  "Sweating", "Swelling", "Swollen glands", "Taste changes", "Throat irritation", 
  "Throat pain", "Tinnitus", "Toothache", "Tremors", "Tunnel vision", 
  "Urinary retention", "Vaginal discharge", "Vertigo", "Vision changes", 
  "Vomiting", "Weakness", "Weight gain", "Weight loss", "Wheezing"
];

export const COMMON_SYMPTOMS = [
  "Fever",
  "Headache",
  "Cough",
  "Fatigue",
  "Shortness of breath",
  "Chest pain",
  "Dizziness",
  "Nausea",
  "Vomiting",
  "Diarrhea",
  "Muscle pain",
  "Joint pain",
  "Rash",
  "Sore throat",
  "Swelling",
  "Anxiety",
  "Insomnia",
  "Back pain"
];

export const DURATION_OPTIONS = [
  { value: "< 1 day", label: "Less than 24 hours" },
  { value: "1-3 days", label: "1 to 3 days" },
  { value: "3-7 days", label: "3 to 7 days" },
  { value: "> 1 week", label: "More than a week" },
  { value: "> 1 month", label: "Chronic (1 month+)" }
];

export const SEVERITY_OPTIONS = [
  { value: "Mild", label: "Mild (Noticeable but doesn't interfere with daily activities)" },
  { value: "Moderate", label: "Moderate (Interferes with some daily activities)" },
  { value: "Severe", label: "Severe (Unable to perform daily activities)" }
];

// Map body parts to relative positions (%) on the front-facing anatomy chart
// NOTE: "Left" and "Right" in BodyPart enum refer to the PATIENT's left/right.
// On a front-view image:
// - Patient's Right is on the Viewer's Left
// - Patient's Left is on the Viewer's Right
export const BODY_HOTSPOTS: Record<string, { top: string; left: string }> = {
  [BodyPart.HEAD]: { top: '7%', left: '50%' },
  [BodyPart.RIGHT_SHOULDER]: { top: '19%', left: '33%' }, // Viewer's Left
  [BodyPart.LEFT_SHOULDER]: { top: '19%', left: '67%' },  // Viewer's Right
  [BodyPart.CHEST]: { top: '23%', left: '50%' },
  [BodyPart.ABDOMEN]: { top: '39%', left: '50%' },
  [BodyPart.RIGHT_THIGH]: { top: '55%', left: '42%' },   // Viewer's Left
  [BodyPart.LEFT_THIGH]: { top: '55%', left: '58%' },    // Viewer's Right
  [BodyPart.RIGHT_KNEE]: { top: '72%', left: '40%' },    // Viewer's Left
  [BodyPart.LEFT_KNEE]: { top: '72%', left: '60%' },     // Viewer's Right
  [BodyPart.GENERAL]: { top: '0%', left: '0%' } // Fallback/Hidden
};