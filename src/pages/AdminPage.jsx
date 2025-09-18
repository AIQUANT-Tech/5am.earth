
import  { useState, useEffect } from "react";
import { User } from "@/api/entities";
import { SiteContent } from "@/api/entities";
import { TeamMember } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Edit, PlusCircle } from "lucide-react";

export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [siteContent, setSiteContent] = useState(null);
    const [teamMembers, setTeamMembers] = useState([]);
    const [editingMember, setEditingMember] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = await User.me();
                if (user.role === 'admin') {
                    setIsAdmin(true);
                    loadData();
                }
            } catch (error) {
                console.log(error)
                setIsAdmin(false);
            }
        };
        checkUser();
    }, []);

    const loadData = async () => {
        const content = await SiteContent.list();
        // Initialize with new field 'firstImageDividerUrl' if no content exists
        setSiteContent(content.length > 0 ? content[0] : { heroBackgroundUrl: '', firstImageDividerUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6eafa01c806bd216dd197/ab6311185_zachid_abstract_pictogram_showing_modular_building_blocks_label_3a3f2a26-7b6a-4dc4-9b08-e9b9f46919e6BackgroundRemoved.png', imageDividerUrl: '', visionImageUrl: '' });

        const members = await TeamMember.list('order');
        setTeamMembers(members);
    };

    const handleContentChange = (e) => {
        const { name, value } = e.target;
        setSiteContent(prev => ({ ...prev, [name]: value }));
    };

    const saveSiteContent = async () => {
        if (siteContent.id) {
            await SiteContent.update(siteContent.id, siteContent);
        } else {
            const newContent = await SiteContent.create(siteContent);
            // After creation, update the state with the full object including the new ID
            setSiteContent(newContent);
        }
        alert('Site content updated!');
        loadData();
    };

    const handleMemberChange = (e) => {
        const { name, value } = e.target;
        setEditingMember(prev => ({ ...prev, [name]: value }));
    };

    const saveTeamMember = async (e) => {
        e.preventDefault();
        if (editingMember.id) {
            await TeamMember.update(editingMember.id, editingMember);
        } else {
            await TeamMember.create(editingMember);
        }
        setEditingMember(null);
        loadData();
    };

    const deleteTeamMember = async (id) => {
        if (window.confirm('Are you sure you want to delete this team member?')) {
            await TeamMember.delete(id);
            loadData();
        }
    };
    
    const startEditing = (member) => {
      setEditingMember({...member});
    }
    
    const startNewMember = () => {
      setEditingMember({ name: '', role: '', description: '', imageUrl: '', order: teamMembers.length + 1 });
    }

    if (!isAdmin) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>You do not have access to this page.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Homepage Visuals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {siteContent && (
                        <>
                            <div>
                                <Label htmlFor="heroBackgroundUrl">Hero Background URL (Video/Image)</Label>
                                <Input id="heroBackgroundUrl" name="heroBackgroundUrl" value={siteContent.heroBackgroundUrl || ''} onChange={handleContentChange} />
                            </div>
                            <div>
                                <Label htmlFor="firstImageDividerUrl">First Image Divider URL</Label>
                                <Input id="firstImageDividerUrl" name="firstImageDividerUrl" value={siteContent.firstImageDividerUrl || ''} onChange={handleContentChange} />
                            </div>
                            <div>
                                <Label htmlFor="imageDividerUrl">Second Image Divider URL</Label>
                                <Input id="imageDividerUrl" name="imageDividerUrl" value={siteContent.imageDividerUrl || ''} onChange={handleContentChange} />
                            </div>
                            <div>
                                <Label htmlFor="visionImageUrl">Vision Section Image URL</Label>
                                <Input id="visionImageUrl" name="visionImageUrl" value={siteContent.visionImageUrl || ''} onChange={handleContentChange} />
                            </div>
                            <Button onClick={saveSiteContent}>Save Homepage Visuals</Button>
                        </>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Leadership Team</CardTitle>
                    <Button variant="outline" size="sm" onClick={startNewMember}><PlusCircle className="mr-2 h-4 w-4" /> Add Member</Button>
                </CardHeader>
                <CardContent>
                    {editingMember && (
                        <form onSubmit={saveTeamMember} className="p-4 mb-6 bg-gray-50 rounded-lg space-y-4">
                            <h3 className="text-lg font-medium">{editingMember.id ? 'Edit' : 'Add'} Team Member</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><Label>Name</Label><Input name="name" value={editingMember.name || ''} onChange={handleMemberChange} required /></div>
                                <div><Label>Role</Label><Input name="role" value={editingMember.role || ''} onChange={handleMemberChange} required /></div>
                                <div className="md:col-span-2"><Label>Image URL</Label><Input name="imageUrl" value={editingMember.imageUrl || ''} onChange={handleMemberChange} required /></div>
                                <div className="md:col-span-2"><Label>Description</Label><Textarea name="description" value={editingMember.description || ''} onChange={handleMemberChange} /></div>
                                <div><Label>Order</Label><Input type="number" name="order" value={editingMember.order || ''} onChange={handleMemberChange} /></div>
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">Save Member</Button>
                                <Button variant="ghost" onClick={() => setEditingMember(null)}>Cancel</Button>
                            </div>
                        </form>
                    )}

                    <div className="space-y-4">
                        {teamMembers.map(member => (
                            <div key={member.id} className="flex items-center justify-between p-3 bg-white rounded-md border">
                                <div className="flex items-center gap-4">
                                    <img src={member.imageUrl} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-semibold">{member.name} ({member.order})</p>
                                        <p className="text-sm text-gray-600">{member.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="icon" onClick={() => startEditing(member)}><Edit className="h-4 w-4" /></Button>
                                    <Button variant="destructive" size="icon" onClick={() => deleteTeamMember(member.id)}><Trash2 className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
