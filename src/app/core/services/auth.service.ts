import { computed, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    passwordStrength = signal<number>(0);
    isPasswordValid = computed(() => this.passwordStrength() >= 70);

    passwordMessage = computed(() => {
        const strength = this.passwordStrength();
        if (strength < 30) return 'Contraseña muy débil';
        if (strength >= 30 && strength <= 50) return 'Contraseña débil';
        if (strength > 50 && strength < 100) return 'Contraseña moderada';
        return 'Contraseña fuerte';
    });

    validatePassword(password: string): void {
        this.passwordStrength.set(this.calculateStrength(password));
    }

    private validateEmail(email: string): void {
        // To do    
    }

    private calculateStrength(password: string): number {
        let strength = 0;
        if (password.length >= 8) strength += 30;
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[0-9]/.test(password)) strength += 20;
        if (/[^A-Za-z0-9]/.test(password)) strength += 30;
        return Math.min(strength, 100);
    }
}