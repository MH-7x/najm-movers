import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface FormDataType {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  moveType: string;
  date?: string;
  size?: string;
  message?: string;
}

interface QuoteRequestEmailProps {
  formData: FormDataType;
}

export const QuoteRequestEmail = ({ formData }: QuoteRequestEmailProps) => {
  const { name, phone, movingFrom, movingTo, moveType, date, size, message } =
    formData;

  return (
    <Html>
      <Head />
      <Preview>
        New Moving Quote Request from {name} — {movingFrom} → {movingTo}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* ── Accent Bar ── */}
          <Section style={accentBar} />

          {/* ── Title Section ── */}
          <Section style={titleSection}>
            <Row>
              <Column align="center">
                <Text style={tagline}>NEW QUOTE REQUEST</Text>
                <Heading as="h1" style={mainHeading}>
                  Moving Quote Details
                </Heading>
                <Text style={subtitle}>
                  A new customer has submitted a moving quote request. Review
                  the details below.
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* ── Customer Info Card ── */}
          <Section style={cardSection}>
            <Text style={sectionLabel}>CUSTOMER INFORMATION</Text>
            <Section style={card}>
              <Row style={infoRow}>
                <Column style={infoLabelCol}>
                  <Text style={infoLabel}>Full Name</Text>
                </Column>
                <Column style={infoValueCol}>
                  <Text style={infoValue}>{name}</Text>
                </Column>
              </Row>
              <Hr style={cardDivider} />
              <Row style={infoRow}>
                <Column style={infoLabelCol}>
                  <Text style={infoLabel}>Phone</Text>
                </Column>
                <Column style={infoValueCol}>
                  <Text style={infoValue}>
                    <Link href={`tel:${phone}`} style={phoneLink}>
                      {phone}
                    </Link>
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* ── Move Details Card ── */}
          <Section style={cardSection}>
            <Text style={sectionLabel}>MOVE DETAILS</Text>
            <Section style={card}>
              {/* Route Visualization */}
              <Section style={routeSection}>
                <Row>
                  <Column align="center">
                    <Text style={routeFrom}>{movingFrom}</Text>
                    <Text style={routeArrow}>→</Text>
                    <Text style={routeTo}>{movingTo}</Text>
                  </Column>
                </Row>
              </Section>

              <Hr style={cardDivider} />

              <Row style={infoRow}>
                <Column style={infoLabelCol}>
                  <Text style={infoLabel}>Move Type</Text>
                </Column>
                <Column style={infoValueCol}>
                  <Text style={infoValue}>{moveType}</Text>
                </Column>
              </Row>

              {date && (
                <>
                  <Hr style={cardDivider} />
                  <Row style={infoRow}>
                    <Column style={infoLabelCol}>
                      <Text style={infoLabel}>Preferred Date</Text>
                    </Column>
                    <Column style={infoValueCol}>
                      <Text style={infoValue}>{date}</Text>
                    </Column>
                  </Row>
                </>
              )}

              {size && (
                <>
                  <Hr style={cardDivider} />
                  <Row style={infoRow}>
                    <Column style={infoLabelCol}>
                      <Text style={infoLabel}>Size / Volume</Text>
                    </Column>
                    <Column style={infoValueCol}>
                      <Text style={infoValue}>{size}</Text>
                    </Column>
                  </Row>
                </>
              )}
            </Section>
          </Section>

          {/* ── Message Card (conditional) ── */}
          {message && (
            <Section style={cardSection}>
              <Text style={sectionLabel}>ADDITIONAL MESSAGE</Text>
              <Section style={messageCard}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </Section>
          )}

          {/* ── CTA ── */}
          <Section style={ctaSection}>
            <Row>
              <Column align="center">
                <Link href={`tel:${phone}`} style={ctaButton}>
                  Call {name} Now
                </Link>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* ── Footer ── */}
          <Section style={footer}>
            <Row>
              <Column align="center">
                <Text style={footerCompany}>
                  Najm Al Dhahabih Furniture Movers LLC
                </Text>
                <Text style={footerText}>
                  This is an automated notification from your website contact
                  form.
                </Text>
                <Text style={footerText}>
                  Please respond to this inquiry as soon as possible.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

QuoteRequestEmail.PreviewProps = {
  formData: {
    name: "Ahmed Al Rashid",
    phone: "+971 50 123 4567",
    movingFrom: "Dubai Marina",
    movingTo: "Abu Dhabi Corniche",
    moveType: "Villa / House",
    date: "2026-04-15",
    size: "3 Bedroom Villa",
    message:
      "I have some fragile antique furniture that needs extra care during packing. Also, I need temporary storage for about a week before the move-in date.",
  },
} as QuoteRequestEmailProps;

export default QuoteRequestEmail;

/* ─────────────────────────── Styles ─────────────────────────── */

const colors = {
  primary: "#FF2828",
  secondary: "#00357A",
  text: "#666666",
  lightGray: "#F7F8FA",
  borderGray: "#E8ECF1",
  white: "#FFFFFF",
};

const main: React.CSSProperties = {
  backgroundColor: "#F0F2F5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "40px 0",
};

const container: React.CSSProperties = {
  backgroundColor: colors.white,
  margin: "0 auto",
  maxWidth: "600px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
};

const header: React.CSSProperties = {
  backgroundColor: colors.secondary,
  padding: "32px 40px 28px",
};

const logo: React.CSSProperties = {
  margin: "0 auto",
};

const accentBar: React.CSSProperties = {
  height: "4px",
  background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primary} 40%, ${colors.secondary} 100%)`,
};

const titleSection: React.CSSProperties = {
  padding: "36px 40px 8px",
};

const tagline: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "2.5px",
  color: colors.primary,
  textTransform: "uppercase" as const,
  margin: "0 0 12px",
  textAlign: "center" as const,
};

const mainHeading: React.CSSProperties = {
  fontSize: "26px",
  fontWeight: 700,
  color: colors.secondary,
  margin: "0 0 12px",
  textAlign: "center" as const,
  lineHeight: "1.3",
};

const subtitle: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: colors.text,
  margin: "0",
  textAlign: "center" as const,
};

const divider: React.CSSProperties = {
  borderColor: colors.borderGray,
  borderWidth: "1px",
  margin: "8px 40px",
};

const cardSection: React.CSSProperties = {
  padding: "12px 40px 8px",
};

const sectionLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "2px",
  color: colors.secondary,
  textTransform: "uppercase" as const,
  margin: "0 0 12px",
  opacity: 0.6,
};

const card: React.CSSProperties = {
  backgroundColor: colors.lightGray,
  borderRadius: "10px",
  padding: "4px 24px",
  border: `1px solid ${colors.borderGray}`,
};

const infoRow: React.CSSProperties = {
  padding: "0",
};

const infoLabelCol: React.CSSProperties = {
  width: "140px",
  verticalAlign: "top" as const,
};

const infoValueCol: React.CSSProperties = {
  verticalAlign: "top" as const,
};

const infoLabel: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: colors.secondary,
  margin: "14px 0",
  opacity: 0.7,
};

const infoValue: React.CSSProperties = {
  fontSize: "15px",
  color: colors.text,
  margin: "14px 0",
  fontWeight: 500,
};

const phoneLink: React.CSSProperties = {
  color: colors.primary,
  textDecoration: "none",
  fontWeight: 600,
};

const cardDivider: React.CSSProperties = {
  borderColor: colors.borderGray,
  borderWidth: "1px",
  margin: "0",
};

const routeSection: React.CSSProperties = {
  padding: "12px 0 8px",
};

const routeFrom: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 700,
  color: colors.secondary,
  margin: "0 0 4px",
  textAlign: "center" as const,
};

const routeArrow: React.CSSProperties = {
  fontSize: "22px",
  color: colors.primary,
  margin: "2px 0",
  textAlign: "center" as const,
  fontWeight: 700,
};

const routeTo: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 700,
  color: colors.secondary,
  margin: "4px 0 0",
  textAlign: "center" as const,
};

const messageCard: React.CSSProperties = {
  backgroundColor: colors.lightGray,
  borderRadius: "10px",
  padding: "20px 24px",
  borderLeft: `4px solid ${colors.primary}`,
  border: `1px solid ${colors.borderGray}`,
  borderLeftColor: colors.primary,
  borderLeftWidth: "4px",
};

const messageText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.7",
  color: colors.text,
  margin: "0",
  fontStyle: "italic" as const,
};

const ctaSection: React.CSSProperties = {
  padding: "24px 40px 16px",
};

const ctaButton: React.CSSProperties = {
  backgroundColor: colors.primary,
  color: colors.white,
  fontSize: "15px",
  fontWeight: 700,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 40px",
  borderRadius: "8px",
  letterSpacing: "0.3px",
};

const footer: React.CSSProperties = {
  padding: "24px 40px 36px",
};

const footerCompany: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  color: colors.secondary,
  margin: "0 0 8px",
  textAlign: "center" as const,
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: "1.5",
  color: colors.text,
  margin: "0",
  textAlign: "center" as const,
  opacity: 0.7,
};
