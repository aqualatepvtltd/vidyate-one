export interface VidyateHub {
  id: string;
  title: string;
  description: string;
  url: string;
  status: 'active' | 'beta' | 'upcoming';
  category: 'academic' | 'professional' | 'healthcare' | 'general';
  fields: string[];
  features: string[];
  color: string;
}

export interface LearningField {
  id: string;
  name: string;
  iconName: string;
  description: string;
  extendedDescription: string;
  coursesCount: number;
  featuredTopic: string;
  accentColor: string;
  hubsAssociated: string[];
}

export interface InquiryFormInput {
  name: string;
  email: string;
  role: 'student' | 'educator' | 'partner' | 'other';
  fieldOfInterest: string;
  message: string;
}

export interface PolicyDocument {
  title: string;
  lastUpdated: string;
  content: string[];
}
