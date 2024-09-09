const env = process.env

describe('Properties File Tests', () => {
    it('should have EXPO_PUBLIC_BACKEND_URL defined', () => {
        expect(env.EXPO_PUBLIC_BACKEND_URL).toBeDefined();
    });

    it('should have EXPO_PUBLIC_STRIPE_PAYMENT_URL defined', () => {
        expect(env.EXPO_PUBLIC_STRIPE_PAYMENT_URL).toBeDefined();
    });

    it('should have EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY defined', () => {
        expect(env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY).toBeDefined();
    });

    it('should have EXPO_PUBLIC_PRODUCTS_ENDPOINT defined', () => {
        expect(env.EXPO_PUBLIC_PRODUCTS_ENDPOINT).toBeDefined();
    });

    it('should have EXPO_PUBLIC_TAGS_ENDPOINT defined', () => {
        expect(env.EXPO_PUBLIC_TAGS_ENDPOINT).toBeDefined();
    });

    it('should have EXPO_PUBLIC_CATEGORIES_ENDPOINT defined', () => {
        expect(env.EXPO_PUBLIC_CATEGORIES_ENDPOINT).toBeDefined();
    });

    it('should have EXPO_PUBLIC_VIDEO_PREVIEW_URL defined', () => {
        expect(env.EXPO_PUBLIC_VIDEO_PREVIEW_URL).toBeDefined();
    });

    it('should have EXPO_PUBLIC_RATE_APP_URL_ANDROID defined', () => {
        expect(env.EXPO_PUBLIC_RATE_APP_URL_ANDROID).toBeDefined();
    });

    it('should have EXPO_PUBLIC_RATE_APP_URL_IOS defined', () => {
        expect(env.EXPO_PUBLIC_RATE_APP_URL_IOS).toBeDefined();
    });

    it('should have EXPO_PUBLIC_CONTACT_URL defined', () => {
        expect(env.EXPO_PUBLIC_CONTACT_URL).toBeDefined();
    });

    it('should have EXPO_PUBLIC_TERMS_URL defined', () => {
        expect(env.EXPO_PUBLIC_TERMS_URL).toBeDefined();
    });

    it('should have EXPO_PUBLIC_PRIVACY_URL defined', () => {
        expect(env.EXPO_PUBLIC_PRIVACY_URL).toBeDefined();
    });

    it('should have EXPO_PUBLIC_ABOUT_URL defined', () => {
        expect(env.EXPO_PUBLIC_ABOUT_URL).toBeDefined();
    });
});

describe('Integration Tests', () => {
    test('Products Endpoint', async () => {
        if(!env.EXPO_PUBLIC_BACKEND_URL?.includes('10.0.2.2')) {
            const response = await fetch(env.EXPO_PUBLIC_BACKEND_URL || '');
            expect(response.status).toBe(200);
        }
    });

    test('Payments Endpoint', async () => {
        const response = await fetch(env.EXPO_PUBLIC_STRIPE_PAYMENT_URL!);
        expect(response.status).toBe(200);
        // Add more assertions for the response data if needed
    });

    test('Video Preview Endpoint', async () => {
        const response = await fetch(env.EXPO_PUBLIC_VIDEO_PREVIEW_URL!);
        expect(response.status).toBe(200);
        // Add more assertions for the response data if needed
    });

    test('Terms URL', async () => {
        const response = await fetch(env.EXPO_PUBLIC_TERMS_URL!);
        expect([200,410]).toContain(response.status);
        // Add more assertions for the response data if needed
    });

    test('Privacy URL', async () => {
        const response = await fetch(env.EXPO_PUBLIC_PRIVACY_URL!);
        expect([200,410]).toContain(response.status);
        // Add more assertions for the response data if needed
    });

    test('About URL', async () => {
        const response = await fetch(env.EXPO_PUBLIC_ABOUT_URL!);
        expect([200,410]).toContain(response.status);
        // Add more assertions for the response data if needed
    });
});