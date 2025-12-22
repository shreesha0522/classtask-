export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            Example Layout
            {children}
            Example Footer
        </section>
    );
}