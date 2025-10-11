export interface FeatEffect {
    id: string;
    type: string;
    title: string;
    description: string;
    data: Record<string, any>;
}

export interface FeatEffectDto extends FeatEffect {}