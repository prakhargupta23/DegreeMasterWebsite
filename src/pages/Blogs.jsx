import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Stack, Dialog, IconButton, Slide } from "@mui/material";
import { useTheme } from "../useTheme";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useNavigate } from "react-router-dom";
import blogAnomalyImage from "../assets/Blogs/HowAnomalyDetectionWorksinFinancial.png";
import blogDocIntelImage from "../assets/Blogs/AIModelsUsedforDocumentIntelligence.png";
import blogAgenticImage from "../assets/Blogs/AgenticAITheFutureofIntelligentSystems.png";
import blogLlmImage from "../assets/Blogs/HowLargeLanguageModels.png";
import blogTrustImage from "../assets/Blogs/DesigningTrustworthyAISystemsforGovernmentUse.png";

// Transition for the full-screen dialog
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Detailed Blog Data provided by User
const blogPosts = [
    {
        id: 1,
        title: "How Anomaly Detection Works in Financial Systems",
        excerpt: "Why traditional rules fail and how AI learns the 'geometry of normality' to detect fraud.",
        image: blogAnomalyImage,
        category: "Deep Tech",
        date: "Feb 5, 2026",
        author: "Tech Team",
        fullContent: `
        1. Introduction  Why This Problem Exists
        Modern financial systems are extremely complex. A single organization may process thousands or even millions of financial events every daypayments, approvals, reimbursements, transfers, allocations, and adjustments.
        On the surface, most of these transactions look legitimate. Amounts may fall within approved limits, vendors may be registered, and approvals may be present. Yet history shows that fraud, misuse, and errors rarely look obvious.
        Traditional financial controls were designed for a simpler world. They rely on fixed thresholds, static rules, and periodic manual audits. These methods fail when irregularities are subtle, gradual, or new in nature. This is where anomaly detection becomes essential.

        2. What Is Anomaly Detection  Explained Properly
        Anomaly detection does not mean finding fraud. This is the first misconception.
        Anomaly detection means finding behavior that statistically and structurally does not match normal system behavior. The system does not accuse. It questions.
        Think of it like this: If you observe a city every day, you slowly understand normal traffic patterns, business hours, and crowd behavior. Anything that deviates significantly stands out  not because it is illegal, but because it is unexpected. That is exactly what anomaly detection does in financial systems.

        3. What the Model Is Actually Learning (Deep Logic)
        When an anomaly detection model is trained, it is not learning fraud patterns. It is learning the geometry of normality.
        It observes historical financial data and learns: - Typical transaction sizes for each department - Normal frequency of payments - Usual timing patterns (daily, weekly, monthly) - Expected relationships between vendors, accounts, and cost centers - How budgets are typically consumed over time
        Mathematically, this forms a multi-dimensional space where normal behavior occupies dense regions. The model builds a probabilistic boundary around this dense region. Anything that falls far outside this region is flagged as an anomaly.
        This is why anomaly detection is powerful: It does not need prior examples of fraud, adapts as behavior evolves, and works even when rules fail.

        4. Why Rule-Based Systems Fail
        Rules are one-dimensional. Example rule: If transaction amount > 5,00,000   flag.
        But financial misuse rarely violates a single rule. Consider this: 50,000 is a normal amount, vendor is registered, approval exists. But 10 payments of 50,000 within 2 hours to the same vendor from multiple cost heads? No single rule is violated, but the pattern is suspicious.
        Machine learning models evaluate relationships, not isolated values: Amount  frequency, Vendor  department  timing, Budget utilization  historical trend. This multi-dimensional reasoning is impossible with static rules.

        5. How Different Models Think Internally - Isolation Forest: Anomalies are rare and different, so they are easier to isolate. Normal data points require many logical splits to separate. Anomalies stand alone and get isolated very quickly. - Autoencoders: Learn to compress and reconstruct normal transactions. Normal data is reconstructed accurately; abnormal data is reconstructed poorly. The reconstruction error becomes the anomaly signal. - One-Class SVM: Learns a tight boundary around normal data in high-dimensional space. Anything outside that boundary is flagged.

        6. Why Human Review Is Mandatory
        Anomaly   Fraud. The model produces signals, not verdicts. Human oversight is required because context matters, exceptions exist, and policy interpretation is human responsibility.
        A good system ensures AI flags, humans decide, and actions are auditable.

        7. Conclusion
        Anomaly detection does not replace financial controls. It strengthens them. By continuously learning normal behavior and highlighting deviations, it allows organizations to move from reactive audits to proactive financial governance.
        `
    },
    {
        id: 2,
        title: "AI Models Used for Document Intelligence",
        excerpt: "Moving beyond OCR: How machines understand meaning, context, and intent in unstructured documents.",
        image: blogDocIntelImage,
        category: "R&D",
        date: "Feb 1, 2026",
        author: "Tech Team",
        fullContent: `
        1. Introduction  The Document Problem
        Organizations do not suffer from lack of data. They suffer from trapped data. Most institutional knowledge lives in PDFs, scanned documents, contracts, reports, and policy files. Humans can read them. Machines cannotunless we teach them how.

        2. What Document Intelligence Really Means
        Document Intelligence is not OCR.
        OCR answers: What characters exist on this page?
        Document Intelligence answers: What is being said, promised, restricted, or required?
        This shiftfrom text to meaningis the core idea.

        3. How Machines Understand Documents (Actual Logic)
        AI models do not read line by line like humans. They convert text into Tokens, Positions, and Context windows.
        Meaning emerges from relationships between tokens, not from the tokens alone.
        Example sentence: Payment shall be released after approval.
        The model learns: Payment   financial action, After   dependency, Approval   conditional trigger. This is semantic understanding, not keyword matching.

        4. Why OCR Alone Is Incomplete
        OCR gives raw text. But raw text has no structure, no intent, no dependency. Without NLP, OCR output is just digital paper. NLP layers meaning on top of text.

        5. Transformer Models  Why They Changed Everything
        Transformers read entire paragraphs at once. They assign attention: which words matter, which phrases relate, which clauses reference earlier sections.
        This allows the model to understand cross-page references, legal dependencies, and contextual meaning. This is essential for contracts, tenders, and policy documents.

        6. Vector Search  Why It Feels Smart
        Instead of storing documents as text, they are stored as vectors (numerical meaning representations). This allows concept-based search and intent-based retrieval.
        So a query like Delayed payments can retrieve documents even if the words delay or payment never appear together.

        7. Conclusion
        Document Intelligence turns static documents into living knowledge systems, enabling faster decisions, better compliance, and scalable governance.
        `
    },
    {
        id: 3,
        title: "Time-Series Analysis for Project Delay Detection",
        excerpt: "Why delays accumulate quietly and how AI tracks direction, speed, and stability to predict slippage.",
        image: blogAnomalyImage,
        category: "Analytics",
        date: "Jan 25, 2026",
        author: "Strategy Team",
        fullContent: `
        1. Why Delays Are Hard to Detect
        Most systems ask: Is the task completed?
        AI systems ask: Is progress behaving normally over time?
        Delays are rarely sudden. They accumulate quietly.

        2. Why Time-Series Matters
        Time-series analysis focuses on Direction, Speed, and Stability.
        It answers: Is progress slowing? Is variability increasing? Is execution deviating from plan?

        3. How Delay Is Detected Early
        The system compares the Expected progress curve vs Actual observed curve.
        Small deviations are acceptable. But persistent divergence creates a risk signal. This is early deviation amplification.

        4. Model-Level Reasoning - ARIMA / Prophet: Captures stable, seasonal patterns. - LSTM / GRU: Captures long-term dependencies. - Change-point detection: Identifies sudden structural breaks.
        Each captures a different failure mode.

        5. Conclusion
        Time-series analysis turns time into intelligence, enabling proactive project control instead of reactive damage control.
        `
    },
    {
        id: 4,
        title: "Agentic AI  The Future of Intelligent Systems",
        excerpt: "Autonomy with responsibility: How agents plan, execute, and evaluate goals differently from predictive AI.",
        image: blogAgenticImage,
        category: "Future Tech",
        date: "Jan 10, 2026",
        author: "Tech Team",
        fullContent: `
        Agentic AI  The Future of Intelligent Systems (Deep Logic)

        Agentic AI is defined by autonomy with responsibility.
        An agent: - Understands goals - Plans steps - Executes actions - Evaluates outcomes

        This is fundamentally different from prediction-based AI.
        Agents think in sequences, not outputs.
        This makes them powerful  and dangerous without controls.

        Hence: Guardrails. Permissions. Audits.
        `
    },
    {
        id: 5,
        title: "How Large Language Models (LLMs) Are Transforming Knowledge Management",
        excerpt: "Why traditional keyword search failed and how RAG architectures create living, trusted intelligence systems.",
        image: blogLlmImage,
        category: "Advanced Tech",
        date: "Jan 5, 2026",
        author: "Tech Team",
        fullContent: `
        1. Introduction: Why Knowledge Management Was Broken for Decades
        Every organization claims to be data-driven, yet most struggle to answer simple questions like: Where is this policy documented? Has this issue been handled before? What was the rationale behind this decision?
        The problem was never lack of data. The problem was knowledge fragmentation. Knowledge exists across PDFs, emails, databases, and portals. Traditional Knowledge Management (KM) systems treated knowledge as static content, requiring users to know exact keywords and where to look.

        2. Why Keyword Search Failed
        Traditional search engines operate on a flawed assumption: Users know exactly what words appear in the document.
        In reality: Humans think in intent, not keywords. Questions are vague, contextual, and incomplete.
        Keyword search fails because Meaning   words and Context   exact phrases. This gap is where LLMs enter.

        3. What LLMs Actually Do (Beyond the Buzzwords)
        Large Language Models do not store knowledge like a database. They learn statistical relationships between words and semantic patterns.
        At a deep level, an LLM learns: Given this context, what information is most relevant and coherent?
        This makes LLMs exceptionally good at understanding intent, rephrasing questions, and connecting related concepts.

        4. The Fundamental Problem: LLMs Do Not Know Truth
        LLMs are probabilistic systems, not factual authorities. They generate responses based on likelihood and coherence. They do not inherently verify truth.
        This leads to hallucinations and fabricated details. In knowledge managementespecially for governmentthis is unacceptable.

        5. Why RAG Exists (The Most Important Section)
        Retrieval-Augmented Generation (RAG) exists because knowledge must be grounded in verified sources, not model memory.
        RAG changes the role of the LLM. Instead of Answer from what you know, the system asks: What is the user asking? Which trusted documents contain relevant info? How do we synthesize an answer from strictly those documents?

        6. Step-by-Step RAG Architecture - Step 1: Knowledge Ingestion: Documents are cleaned, chunked, and converted into semantic embeddings. - Step 2: Secure Storage: Embeddings are stored in vector databases with access controls. - Step 3: Query Understanding: User query is parsed and interpreted for intent. - Step 4: Retrieval: The system retrieves the most semantically relevant chunks from approved sources only. - Step 5: Grounded Generation: The LLM generates an answer constrained to those sources.

        7. Why This Transforms Knowledge Management
        Traditional KM systems were passive, static, and search-driven. LLM-based KM systems are conversational, context-aware, and intent-driven. They shift knowledge access from Find the document to Get the answer.

        8. Real Organizational Impact
        With LLM-based KM: Employees spend less time searching, knowledge silos collapse, and institutional memory is preserved. This is especially powerful in large enterprises and government departments.

        9. Why Governance Is Non-Negotiable
        LLMs are powerful but agnostic to responsibility. Without governance, wrong answers spread and sensitive data leaks.
        Governance mechanisms include: Source restrictions, Confidence scoring, Logging, and Human review.

        10. Conclusion
        LLMs do not replace knowledge systems. They activate them. When combined with RAG and governance, LLMs transform knowledge from static archives into living, trusted intelligence systems.
        `
    },
    {
        id: 6,
        title: "Designing Trustworthy AI Systems for Government Use",
        excerpt: "Why government AI must optimize for legitimacy, explainability, and accountability over just speed.",
        image: blogTrustImage,
        category: "Policy & Ethics",
        date: "Dec 30, 2025",
        author: "Ethics Board",
        fullContent: `
        1. Why Government AI Is Different
        Government AI systems operate under conditions unlike any commercial system. They must affect millions of citizens, withstand legal scrutiny, be explainable years later, and maintain public trust.
        A private company can optimize for speed. Government must optimize for legitimacy.

        2. Trust Is Not a Feature  It Is an Emergent Property
        Trust cannot be added to AI. It emerges when systems behave predictably, decisions are explainable, errors are traceable, and humans retain control. A trustworthy AI system is designed, not tuned.

        3. Core Pillars of Trustworthy Government AI - Transparency: Citizens and officials must understand what the system does and what data it uses. Opaque systems breed suspicion. - Explainability: Every significant AI-assisted decision must answer Why was this outcome produced? using traces and reason codes. - Accountability: AI must never be the final authority. Accountability requires human decision ownership and audit logs. - Fairness: AI systems can amplify bias if unchecked. Fairness audits and representative data are mandatory. - Security: Government data is sensitive. Systems must enforce data minimization and encryption.

        4. Human-in-the-Loop Is Mandatory
        In government: AI assists. Humans decide.
        Human-in-the-loop ensures contextual judgment, ethical reasoning, and legal responsibility. AI recommendations without human oversight are unacceptable.

        5. Explainability: How It Works Internally
        Explainable AI does not mean the model explains itself like a human. It means showing which inputs influenced outcomes, tracing decision paths, and providing confidence indicators. This allows internal audits and legal review.

        6. Logging, Auditing, and Traceability
        Every AI action must be logged, timestamped, and attributable. This creates decision trails and forensic capability. Without logs, trust collapses.

        7. Why Black-Box AI Fails in Government
        Black-box systems cannot justify decisions, cannot be legally defended, and cannot be corrected transparently. This leads to legal challenges and public distrust.

        8. Risk of Not Designing for Trust
        Without trust, AI adoption stalls and manual systems persist. Worse, wrong decisions harm citizens.

        9. The Right Mental Model
        Government AI should be viewed as decision-support infrastructure, not automation engines. Its purpose is to enhance human judgment and reduce cognitive load, not to replace authority.

        10. Conclusion
        AI in government succeeds only when it is explainable, auditable, and respects human authority. Trustworthy AI is not slower innovation. It is durable innovation.
        `
    }
];

export default function Blogs() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const handleOpen = (post) => {
        setSelectedPost(post);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleContactTeam = () => {
        setOpen(false);
        navigate("/contact");
    };

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: theme.bgGlow,
                backgroundSize: "cover",
                transition: "background 0.5s ease",
                py: { xs: 8, md: 16 }
            }}
        >
            <Container maxWidth="lg">
                {/* HEADER */}
                <Box sx={{ textAlign: "center", mb: { xs: 6, md: 12 } }}>
                    <Typography variant="overline" sx={{ color: theme.primary, fontWeight: 700, letterSpacing: 2 }}>
                        KNOWLEDGE HUB
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, color: theme.white, fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" } }}>
                        Deep Dive Insights
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: "700px", mx: "auto", color: theme.textMutedSoft, fontSize: { xs: "1rem", md: "1.2rem" } }}>
                        Technical and strategic breakdowns of how we measure, monitor, and modernize government operations.
                    </Typography>
                </Box>

                {/* BLOG GRID */}
                <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} justifyContent="center">
                    {blogPosts.map((post) => (
                        <Grid item xs={12} sm={6} lg={4} key={post.id}>
                            <Card
                                onClick={() => handleOpen(post)}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    bgcolor: theme.overlayWhite03,
                                    backdropFilter: "blur(10px)",
                                    border: `1px solid ${theme.overlayWhite08}`,
                                    borderRadius: "20px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    overflow: "hidden",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        borderColor: theme.primary,
                                        boxShadow: `0 10px 40px ${theme.primary}22`
                                    }
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        aspectRatio: '16 / 9',
                                        width: '100%',
                                        bgcolor: theme.black,
                                        backgroundImage: `url(${post.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        opacity: 0.9
                                    }}
                                />
                                <CardContent sx={{ p: { xs: 2.5, md: 4 }, flexGrow: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={{ xs: 1.5, md: 2 }} sx={{ mb: { xs: 1.5, md: 2 }, width: "100%" }}>
                                        <Chip
                                            label={post.category}
                                            size="small"
                                            sx={{
                                                bgcolor: `${theme.primary}22`,
                                                color: theme.primary,
                                                fontWeight: 700,
                                                borderRadius: "8px"
                                            }}
                                        />
                                        <Typography variant="caption" sx={{ color: theme.textSubtle }}>{post.date}</Typography>
                                    </Stack>

                                    <Typography variant="h5" sx={{ color: theme.white, fontWeight: 700, mb: { xs: 1.5, md: 2 }, lineHeight: 1.3, fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                                        {post.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: theme.textMuted, mb: { xs: 2, md: 3 }, lineHeight: 1.6 }}>
                                        {post.excerpt}
                                    </Typography>

                                    <Button
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{
                                            color: theme.primary,
                                            textTransform: "none",
                                            fontWeight: 600,
                                            p: 0,
                                            mt: "auto",
                                            "&:hover": { bgcolor: "transparent", color: theme.secondary }
                                        }}
                                    >
                                        Read Deep Dive
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>

            {/* FULL SCREEN BLOG READER */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                PaperProps={{
                    sx: { bgcolor: theme.black, backgroundImage: "none" } // Pure black for reading
                }}
            >
                {selectedPost && (
                    <Box sx={{ minHeight: "100vh", bgcolor: theme.black, color: theme.white }}>
                        {/* NAV */}
                        <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", p: 2, display: "flex", justifyContent: "flex-end", zIndex: 100, background: theme.overlayBlack80, backdropFilter: "blur(10px)" }}>
                            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon fontSize="large" sx={{ color: theme.primary }} />
                            </IconButton>
                        </Box>

                        {/* CONTENT CONTAINER */}
                        <Container maxWidth="md" sx={{ py: 12 }}>
                            <Chip label={selectedPost.category} sx={{ bgcolor: theme.primary, color: theme.white, fontWeight: 700, mb: 4 }} />
                            <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, lineHeight: 1.2 }}>
                                {selectedPost.title}
                            </Typography>
                            <Stack direction="row" spacing={4} sx={{ mb: 8, color: theme.textDim, borderBottom: `1px solid ${theme.overlayWhite10}`, pb: 4 }}>
                                <Typography>By {selectedPost.author}</Typography>
                                <Typography>{selectedPost.date}</Typography>
                            </Stack>

                            {/* Render Text with formatting */}
                            {selectedPost.fullContent.split('\n').map((line, index) => {
                                const trimLine = line.trim();
                                if (!trimLine) return <Box key={index} sx={{ h: 2 }} />;

                                // Only treat short numbered lines as section headers.
                                if (trimLine.match(/^\d+\./) && trimLine.length <= 90) {
                                    // Header lines starting with "1. ", "2. ", etc.
                                    return (
                                        <Typography key={index} variant="h5" sx={{ color: theme.secondary, fontWeight: 700, mt: 6, mb: 2 }}>
                                            {trimLine}
                                        </Typography>
                                    );
                                } else if (trimLine.startsWith('-')) {
                                    // Bullet points
                                    return (
                                        <Typography key={index} variant="body1" sx={{ color: theme.textReadable, lineHeight: 1.8, ml: 2, mb: 1, display: "flex", gap: 1 }}>
                                            <span style={{ color: theme.primary }}>-</span> {trimLine.substring(1)}
                                        </Typography>
                                    );
                                } else {
                                    // Paragraphs
                                    return (
                                        <Typography key={index} variant="body1" sx={{ color: theme.textMutedSoft, lineHeight: 1.8, mb: 2, fontSize: "1.05rem" }}>
                                            {trimLine}
                                        </Typography>
                                    );
                                }
                            })}

                            <Box sx={{ mt: 12, pt: 8, borderTop: `1px solid ${theme.overlayWhite10}`, textAlign: "center" }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Ready to implement this?</Typography>
                                <Button variant="contained" size="large" onClick={handleContactTeam} sx={{ bgcolor: theme.primary, borderRadius: "50px", px: 4 }}>
                                    Contact Our Team
                                </Button>
                            </Box>
                        </Container>
                    </Box>
                )}
            </Dialog>
        </Box>
    );
}






