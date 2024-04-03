export type Van = {
    id: string;
    imageUrl?: string;
    name?: string;
    price?: number;
    type?: VanType;
    description?: string;
  };

export type ContextType = { infoVan: Van | null };

export type VanType = "simple" | "rugged" | "luxury";

export type LoginFormData = { email: string, password: string }

export type Loader = {
  request: Request
}

export type Action = {
  request: Request
}