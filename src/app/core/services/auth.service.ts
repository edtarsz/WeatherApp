import { computed, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    firstName = signal<string>('');
    lastName = signal<string>('');

    email = signal<string>('');
    password = signal<string>('');

    passwordStrength = computed(() => {
        return this.calculateStrength(this.password());
    });

    passwordValidation = computed(() => {
        const strength = this.passwordStrength();
        const password = this.password();

        if (/\s/.test(password)) {
            return { isValid: false, message: 'La contraseña no debe contener espacios' };
        }

        if (password.length < 8) {
            return { isValid: false, message: 'La contraseña debe tener al menos 8 caracteres' };
        }

        if (password.length > 50) {
            return { isValid: false, message: 'La contraseña debe tener menos de 50 caracteres' };
        }

        if (strength < 30) {
            return { isValid: false, message: 'Contraseña muy débil' };
        }

        if (strength >= 30 && strength <= 50) {
            return { isValid: false, message: 'Contraseña débil' };
        }

        if (strength > 50 && strength < 100) {
            return { isValid: true, message: 'Contraseña moderada' };
        }

        return {
            isValid: true,
            message: 'Contraseña fuerte'
        };
    });

    nameValidation = computed(() => {
        const first = this.firstName();
        const last = this.lastName();

        if (!first.trim() || !last.trim()) {
            return { isValid: false, message: 'Nombre y apellido son requeridos' };
        }

        if (first.length > 50 || last.length > 50) {
            return { isValid: false, message: 'El nombre y apellido deben tener menos de 50 caracteres' };
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(first) || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(last)) {
            return { isValid: false, message: 'Solo se permiten letras y espacios' };
        }

        return {
            isValid: true,
            message: 'Nombres válidos'
        };
    });

    emailValidation = computed(() => {
        const email = this.email();
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (email.length > 254) {
            return { isValid: false, message: 'Email demasiado largo' };
        }

        if (!emailRegex.test(email)) {
            return { isValid: false, message: 'Formato de email inválido' };
        }

        const parts = email.split('@');
        const domain = parts[1];

        if (domain.includes('..') || domain.startsWith('.') || domain.endsWith('.')) {
            return { isValid: false, message: 'Dominio inválido' };
        }

        return {
            isValid: true,
            message: 'Email válido'
        };
    })

    updateFirstName(name: string): void {
        this.firstName.set(name);
    }

    updateLastName(lastName: string): void {
        this.lastName.set(lastName);
    }

    updateEmail(email: string): void {
        this.email.set(email);
    }

    updatePassword(password: string): void {
        this.password.set(password);
    }

    private calculateStrength(password: string): number {
        // Si la contraseña está vacía o contiene espacios, fuerza 0
        if (/\s/.test(password)) return 0;

        let strength = 0;
        if (password.length >= 8) strength += 30;
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[0-9]/.test(password)) strength += 20;
        if (/[^A-Za-z0-9]/.test(password)) strength += 30;
        return Math.min(strength, 100);
    }
}