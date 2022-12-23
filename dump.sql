--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shorten; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shorten (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" character varying(10) NOT NULL,
    "userId" integer NOT NULL,
    "linkAcess" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: shorten_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shorten_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shorten_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shorten_id_seq OWNED BY public.shorten.id;


--
-- Name: signIn; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."signIn" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: signIn_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."signIn_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: signIn_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."signIn_id_seq" OWNED BY public."signIn".id;


--
-- Name: signUp; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."signUp" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: signUp_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."signUp_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: signUp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."signUp_id_seq" OWNED BY public."signUp".id;


--
-- Name: shorten id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorten ALTER COLUMN id SET DEFAULT nextval('public.shorten_id_seq'::regclass);


--
-- Name: signIn id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."signIn" ALTER COLUMN id SET DEFAULT nextval('public."signIn_id_seq"'::regclass);


--
-- Name: signUp id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."signUp" ALTER COLUMN id SET DEFAULT nextval('public."signUp_id_seq"'::regclass);


--
-- Data for Name: shorten; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.shorten VALUES (1, '123', 'XmRLhM', 8, 0, '2022-12-23 10:56:18.695255');
INSERT INTO public.shorten VALUES (2, '123', 'KN4IdH', 8, 0, '2022-12-23 10:56:20.493497');
INSERT INTO public.shorten VALUES (3, '123', 'IqQE72', 8, 0, '2022-12-23 10:56:20.996631');
INSERT INTO public.shorten VALUES (4, '123', 'mS8MVF', 8, 0, '2022-12-23 10:56:22.583098');
INSERT INTO public.shorten VALUES (5, '123', 'vKzw7L', 8, 0, '2022-12-23 10:56:23.017355');
INSERT INTO public.shorten VALUES (6, 'https://ge.globo.com/', '4kiQoo', 8, 3, '2022-12-23 10:57:06.975859');


--
-- Data for Name: signIn; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."signIn" VALUES (1, 1, '4c739d92-5257-43d3-955e-12565bc951da', '2022-12-22 14:20:32.332107');
INSERT INTO public."signIn" VALUES (2, 1, '2af20c69-480c-45d0-b689-a143da48da9a', '2022-12-22 14:32:55.851742');
INSERT INTO public."signIn" VALUES (3, 1, 'fb9646a6-f2fe-4c0e-acac-cc200f3dc9cc', '2022-12-22 14:33:02.56975');
INSERT INTO public."signIn" VALUES (4, 1, 'b932ed28-b3c9-45a7-9bc3-a103cd2ab172', '2022-12-22 14:33:35.027774');
INSERT INTO public."signIn" VALUES (5, 3, '815cab4f-3d05-4cf6-8d47-ce66a0607765', '2022-12-22 15:12:25.271974');
INSERT INTO public."signIn" VALUES (6, 4, 'f514bc68-3503-47a4-a9f5-15727d386636', '2022-12-22 15:13:01.760874');
INSERT INTO public."signIn" VALUES (7, 5, 'eebd5e34-4320-4050-9b81-cfa41085bb01', '2022-12-22 15:13:52.189435');
INSERT INTO public."signIn" VALUES (8, 6, '2afe706b-988f-4273-8dc0-d8461337412e', '2022-12-23 10:13:28.000854');
INSERT INTO public."signIn" VALUES (9, 8, 'f7fdb6f5-3486-409e-8257-87867d7f521a', '2022-12-23 10:18:07.599538');
INSERT INTO public."signIn" VALUES (10, 8, 'e0073547-af0e-4129-a489-c54620b387bb', '2022-12-23 10:55:18.021573');


--
-- Data for Name: signUp; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."signUp" VALUES (1, 'zentail', 'pedro@gmail.com', '$2b$05$LIpxFqg6dt6Ybab7fEC0LeFl7DEyI4XtIs1VGkzvQGmm8Q7sFb7Kq', '2022-12-22 14:20:23.036982');
INSERT INTO public."signUp" VALUES (3, 'lucas', 'lucas@gmail.com', '$2b$05$TAlNVCVq7dD1UH80mrGnH.FHRzYRFu8KmDw4jARsP3/I.n6S.gsMm', '2022-12-22 15:12:11.371139');
INSERT INTO public."signUp" VALUES (4, 'lucas', 'renan@gmail.com', '$2b$05$WRUyCTe4vNS1hSRvYOMkI.Kk38vKmb1PaRmJDbri4NBNOchGdT.iC', '2022-12-22 15:12:16.615636');
INSERT INTO public."signUp" VALUES (5, 'lucas', 'enrico@gmail.com', '$2b$05$KY0r6FNDpDZ20DFL1e9uj.CtL8pxzVluvHO7YFuAXdwcMsSQTTYDi', '2022-12-22 15:12:20.241836');
INSERT INTO public."signUp" VALUES (6, 'Fabio', 'fabio@driven.com.br', '$2b$05$37xsFvDrYqlUjhYGjGqZaO9TxyrPSYDpv1ShZfkca4xXBRgSW.UAe', '2022-12-23 10:12:52.736776');
INSERT INTO public."signUp" VALUES (8, 'pedro', 'pedro@driven.com.br', '$2b$05$QDwEBkgkVVQpIckhnR.qLuig2w/e5Y10l25rc4yOUeLcriCQbwOBC', '2022-12-23 10:18:02.670035');


--
-- Name: shorten_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.shorten_id_seq', 6, true);


--
-- Name: signIn_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."signIn_id_seq"', 10, true);


--
-- Name: signUp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."signUp_id_seq"', 8, true);


--
-- Name: shorten shorten_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorten
    ADD CONSTRAINT shorten_pkey PRIMARY KEY (id);


--
-- Name: shorten shorten_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorten
    ADD CONSTRAINT "shorten_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: signIn signIn_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."signIn"
    ADD CONSTRAINT "signIn_pkey" PRIMARY KEY (id);


--
-- Name: signIn signIn_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."signIn"
    ADD CONSTRAINT "signIn_token_key" UNIQUE (token);


--
-- Name: signUp signUp_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."signUp"
    ADD CONSTRAINT "signUp_email_key" UNIQUE (email);


--
-- Name: signUp signUp_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."signUp"
    ADD CONSTRAINT "signUp_pkey" PRIMARY KEY (id);


--
-- Name: shorten shorten_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorten
    ADD CONSTRAINT "shorten_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."signUp"(id);


--
-- Name: signIn signIn_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."signIn"
    ADD CONSTRAINT "signIn_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."signUp"(id);


--
-- PostgreSQL database dump complete
--

