export interface LangSelectProps {
    closeOnClick?: () => void
    langSelectHandleClick: (value: string, code: string) => void
}