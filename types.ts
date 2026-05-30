export enum RiskLevel {
  LOW = 'Low',
  MODERATE = 'Moderate',
  HIGH = 'High',
  CRITICAL = 'Critical' // Internal use for emergency keywords
}

export interface SymptomData {
  selectedBodyPart: string | null;
  selectedSymptoms: string[];
  description: string;
  duration: string;
  severity: string;
}

export interface AnalysisResult {
  riskLevel: RiskLevel;
  summary: string;
  possibleCauses: string[];
  preventiveActions: string[];
  medicalAdvice: string;
  disclaimer: string;
  suggested_specialist?: string;
  confidence?: string;
}

export enum BodyPart {
  HEAD = 'Head',
  LEFT_SHOULDER = 'Left Shoulder',
  RIGHT_SHOULDER = 'Right Shoulder',
  CHEST = 'Chest',
  ABDOMEN = 'Abdomen',
  LEFT_THIGH = 'Left Thigh',
  RIGHT_THIGH = 'Right Thigh',
  LEFT_KNEE = 'Left Knee',
  RIGHT_KNEE = 'Right Knee',
  GENERAL = 'General Body'
}