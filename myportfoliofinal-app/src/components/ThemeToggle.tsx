
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        className="rounded-full"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-300 transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-navy transition-all" />
        )}
      </Button>
    </div>
  );
};
