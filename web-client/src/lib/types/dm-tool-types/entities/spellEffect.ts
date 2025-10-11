export interface SpellEffect {
    id: string;
    subtitle: string;
    type: string;
    data: Record<string, any>;
}

export interface SpellEffectDto extends SpellEffect {}