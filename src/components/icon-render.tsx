import { Icons } from "@/components/ui/icons-list"

type IconName = keyof typeof Icons;

const FallbackIcon = () => <div className="size-4 bg-gray-300 rounded" />;

export const IconRender = ({ name }: { name: string }) => {
    const Icon = Icons[name as IconName] ?? FallbackIcon

    return <Icon className="size-4" />
}
