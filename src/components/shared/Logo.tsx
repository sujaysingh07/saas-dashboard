export default function Logo(){
    return <div className="flex items-center gap-2 mb-10 absolute top-5 left-5 text-foreground">
        <div className="w-5 h-5 bg-primary rounded-full flex justify-center items-center">
            <div className="w-2 h-2 bg-primary-foreground rounded-full" />
        </div>
        <span className="text-lg font-semibold">aps</span>
    </div>
}
