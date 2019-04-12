interface FloatingLabel {
  children: React.ReactNode;
}

interface Label extends React.InputHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: React.ReactNode;
  float?: boolean;
}

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
  // For matching label with correct input (<label for="..">)
  id: string;
  // Reference the correct input
  name?: string;
  // Track what's in the input
  value?: string;
  // Function to track current input value in state
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  children?: React.ReactNode;
  float?: boolean;
}
