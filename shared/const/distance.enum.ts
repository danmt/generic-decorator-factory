export enum Distance {
  Short = 'short',
  Medium = 'medium',
  Long = 'long',
  VeryLong = 'very long'
};

export type DistanceTypes = 
  | Distance.Short
  | Distance.Medium
  | Distance.Long
  | Distance.VeryLong;
