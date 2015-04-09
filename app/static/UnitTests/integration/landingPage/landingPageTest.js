describe('Landing Page', function() {
    it('should navigate to Project Cost', function() {
        browser.get('http://localhost:63342/ProjectCost/app/index.html#/LandingPage');
        expect(element(by.xpath('//h2')).getText()).toEqual('Welcome to ProjectCost');
    });
});