export interface ContactoInfo {
  icono: string;
  etiqueta: string;
  valor: string;
}

export interface Estudio {
  titulo: string;
  institucion: string;
  periodo: string;
}

export interface Habilidad {
  nombre: string;
  nivel: number; // 0 a 100
}

export interface ProyectoInfo {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
}

export interface TemaCurso {
  titulo: string;
  descripcion: string;
  aprendido: string[];
}

export interface Actividad {
  nombre: string;
  tipo: string;
  tecnologia: string;
}

export interface Videojuego {
  titulo: string;
  genero: string;
  plataforma: string;
  anio: number;
  descripcion: string;
}