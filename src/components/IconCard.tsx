import { IconProps } from "@phosphor-icons/react";

interface IconCardProps {
    icon: React.ComponentType<IconProps>;
    label: string;
}

export default function IconCard({ icon: Icon, label }: IconCardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <Icon weight="fill" size={92} className="text-gray-800 dark:text-gray-200" />
            <span className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">{label}</span>
        </div>
    );
}
