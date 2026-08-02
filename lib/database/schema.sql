-- Enable UUID support
create extension if not exists "pgcrypto";

-- User Profiles
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  company text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Projects
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  name text not null,
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Keyword Searches
create table if not exists keyword_searches (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  keyword text not null,
  search_volume integer,
  difficulty integer,
  cpc numeric,
  competition numeric,
  intent text,
  created_at timestamptz default now()
);

-- Saved Keywords
create table if not exists saved_keywords (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  keyword_search_id uuid references keyword_searches(id) on delete cascade,
  created_at timestamptz default now()
);

-- Export History
create table if not exists exports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  format text not null,
  file_name text,
  created_at timestamptz default now()
);

-- Indexes
create index if not exists idx_projects_user
on projects(user_id);

create index if not exists idx_keyword_user
on keyword_searches(user_id);

create index if not exists idx_exports_user
on exports(user_id);

-- Row Level Security
alter table profiles enable row level security;
alter table projects enable row level security;
alter table keyword_searches enable row level security;
alter table saved_keywords enable row level security;
alter table exports enable row level security;
