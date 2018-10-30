import { Selector } from 'testcafe'

class SynapsePageSelectors {
    constructor() {
        this.challengeImageWidget = Selector('.ImageWidget');
        this.images = Selector('img');
        this.synapseHeader = Selector('a').withText('SYNAPSE');
    }
}
const synapsePageSelectors = new SynapsePageSelectors();
console.time("Profile: full page load");

fixture('Profile page load')
    .page('https://www.synapse.org/#!Profile:345424');

// test to get initial full page load (download app, run js, get profile)
test(`Load Profile page and go to Home Page`, async t => {
    await t.setPageLoadTimeout(120000);
    await t.expect(synapsePageSelectors.synapseHeader.visible).ok();
    console.timeEnd("Profile: full page load");
    console.time("go to home page");
    await t.click(synapsePageSelectors.images.nth(0));
    console.timeEnd("go to home page");
});

console.time("Project: full page load");
fixture('DREAM Single Cell Transcriptomics Challenge page')
    .page('https://www.synapse.org/#!Synapse:syn15665609/wiki/582909');

// test to get initial full page load (download app, run js, get entity bundle)
test(`Load Project page`, async t => {
    await t.setPageLoadTimeout(120000);
    await t.expect(synapsePageSelectors.challengeImageWidget.visible).ok();
    console.timeEnd("Project: full page load");
});