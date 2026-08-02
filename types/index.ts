export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface KeywordResult {
  id: string;
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  competition: number;
  intent: "Informational" | "Commercial" | "Transactional" | "Navigational";
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
}

export interface SearchHistory {
  id: string;
  keyword: string;
  searchedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
