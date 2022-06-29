import React from 'react';
import { LegalSection, Page, Seo } from '@sorrel340/gatsby-theme-portfolio-minimal';

export default function ImprintPage() {
    return (
        <>
            <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
            <Page>
                <LegalSection sectionId="imprint" heading="Imprint" />
            </Page>
        </>
    );
}
