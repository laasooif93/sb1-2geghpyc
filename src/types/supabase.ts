export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      loan_applications: {
        Row: {
          id: string
          created_at: string
          user_id: string
          amount: number
          term: number
          status: 'pending' | 'approved' | 'rejected'
          collateral_type: string
          collateral_value: number
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          amount: number
          term: number
          status?: 'pending' | 'approved' | 'rejected'
          collateral_type: string
          collateral_value: number
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          amount?: number
          term?: number
          status?: 'pending' | 'approved' | 'rejected'
          collateral_type?: string
          collateral_value?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}