import { Selector } from 'testcafe'

class SynapsePageSelectors {
    constructor() {
        this.challengeImageWidget = Selector('.ImageWidget')
        this.images = Selector('img')
        this.synapseHeader = Selector('a').withText('SYNAPSE');
    }
}
const synapsePageSelectors = new SynapsePageSelectors()
console.time("full page load");

fixture('DREAM Single Cell Transcriptomics Challenge page')
    .page('https://www.synapse.org/#!Synapse:syn15665609/wiki/582909')
    .beforeEach(t => t.resizeWindow(1920, 1080))

// test to get initial full page load (download app, run js, get project entity bundle, get wiki, process markdown)
test(`Load DREAM Single Cell Transcriptomics Challenge page and go to Home Page`, async t => {
    await t.setPageLoadTimeout(120000)
    await t.expect(synapsePageSelectors.challengeImageWidget.visible).ok();
    console.timeEnd("full page load")
    console.time("go to home page");
    await t.click(synapsePageSelectors.images.nth(0))
    await t.expect(synapsePageSelectors.synapseHeader.visible).ok();
    console.timeEnd("go to home page")
});
