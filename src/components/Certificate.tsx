import { useState } from "react";
import { AnimatePresence } from "motion/react";
import type { CertificateData } from "../constants";
import ShowcaseModal from "./ShowcaseModal";

interface CertificatePreviewProps {
  certificate: CertificateData;
  full?: boolean;
}

const CertificatePreview = ({ certificate, full = false }: CertificatePreviewProps) => {
  const { title, issuer, issued, credentialId, image, logo } = certificate;

  if (image) {
    return (
      <img src={image} alt={`${title}, issued by ${issuer}`} loading={full ? "eager" : "lazy"} />
    );
  }

  return (
    <div className={`certificate-placeholder${full ? " certificate-placeholder-full" : ""}`}>
      {logo && <img src={logo} alt="" />}
      {full ? (
        <>
          <span>{issuer}</span>
          <strong>Official credential</strong>
          <small>Open the verification page to view the issuer&apos;s record.</small>
        </>
      ) : (
        <>
          <span>{issuer}</span>
          <strong>{title}</strong>
          <small>Issued {issued}</small>
          <small>Credential ID: {credentialId}</small>
        </>
      )}
    </div>
  );
};

const Certificate = ({ certificate }: { certificate: CertificateData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, issuer, issued, credentialId, credentialUrl } = certificate;

  return (
    <>
      <article className="certificate-card">
        <button className="certificate-card-button" onClick={() => setIsOpen(true)}>
          <div className="certificate-frame">
            <CertificatePreview certificate={certificate} />
            <span className="certificate-view">View certificate ↗</span>
          </div>
          <span className="certificate-meta">
            <span>
              <strong>{title}</strong>
              <small>{issuer}</small>
            </span>
            <small>{issued}</small>
          </span>
        </button>
      </article>

      <AnimatePresence>
        {isOpen && (
          <ShowcaseModal
            closeModal={() => setIsOpen(false)}
            label={`${title} certificate`}
            className="certificate-dialog"
          >
            <div className="certificate-modal-layout">
              <div className="certificate-modal-visual">
                <CertificatePreview certificate={certificate} full />
              </div>

              <aside className="certificate-modal-details">
                <div>
                  <span className="showcase-kicker">Certificate</span>
                  <h3>{title}</h3>
                  <p className="certificate-issuer">Issued by {issuer}</p>
                </div>

                <dl className="certificate-facts">
                  <div>
                    <dt>Issued</dt>
                    <dd>{issued}</dd>
                  </div>
                  <div>
                    <dt>Credential ID</dt>
                    <dd>{credentialId}</dd>
                  </div>
                </dl>

                {credentialUrl && (
                  <a
                    className="certificate-verify"
                    href={credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify credential <span aria-hidden="true">↗</span>
                  </a>
                )}
              </aside>
            </div>
          </ShowcaseModal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificate;
