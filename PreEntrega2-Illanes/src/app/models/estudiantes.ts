import { Persona } from "./persona";

export interface Estudiante extends Persona{
    estaActivo: boolean;
    fecha_inicio: string;
    fecha_final: string;
    promedio_final: number;
    
}